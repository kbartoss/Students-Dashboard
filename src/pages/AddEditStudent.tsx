import { useForm } from 'react-hook-form'
import Select from '../components/Select'
import { StyledAddEditStudent } from '../styles/AddEditStudent.styles'
import { validPhone, validMail, validName } from '../utils/regex'
import { supabase } from '../api/supabaseClient'
import { useState } from 'react'

const AddStudent = ({ previousPage, isEdit, selectedStudent, setStudentsData, confirmEditing }: any) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = (data: any) => console.log(data)

	const [name, setName] = useState(selectedStudent.name)
	const [surname, setSurname] = useState(selectedStudent.surname)
	const [phoneNumber, setPhoneNumber] = useState(selectedStudent.phoneNumber)
	const [mail, setMail] = useState(selectedStudent.mail)
	const [grade, setGrade] = useState(selectedStudent.grade)

	const handleConfirmEditing = async () => {
		const { error } = await supabase
			.from('listStudents')
			.update({ name, surname, phoneNumber, mail, grade })
			.eq('id', selectedStudent.id)

		if (error) {
			console.log('Error updating student:', error.message)
		} else {
			console.log('Student updated successfully:', selectedStudent.name)
			const { data: updatedData } = await supabase.from('listStudents').select('*')
			setStudentsData(updatedData)
			confirmEditing()
		}
	}

	return (
		<StyledAddEditStudent>
			<h1>{isEdit ? 'Edytuj' : 'Dodaj nowego'} ucznia</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p className="title">Imię</p>
				<input
					defaultValue={selectedStudent.name}
					{...register('firstName', {
						required: true,
						minLength: 3,
						maxLength: 30,
						pattern: validName,
						onChange: e => setName(e.target.value),
					})}
				/>
				{errors.firstName && <p className="error">Imię powinno mieć od 3 do 30 znaków</p>}

				<p className="title">Nazwisko</p>
				<input
					defaultValue={selectedStudent.surname}
					{...register('lastName', {
						required: true,
						minLength: 3,
						maxLength: 30,
						pattern: validName,
						onChange: e => setSurname(e.target.value),
					})}
				/>
				{errors.lastName && <p className="error">Nazwisko powinno mieć od 3 do 30 znaków</p>}

				<p className="title">Numer telefonu</p>
				<input
					defaultValue={selectedStudent.phoneNumber}
					type="number"
					{...register('phoneNumber', {
						required: true,
						maxLength: 9,
						minLength: 1,
						pattern: validPhone,
						onChange: e => setPhoneNumber(e.target.value),
					})}
				/>
				{errors.phoneNumber && <p className="error">Numer telefonu powinien mieć od 1 do 9 cyfr</p>}

				<p className="title">Adres e-mail</p>
				<input
					defaultValue={selectedStudent.mail}
					{...register('email', { required: true, pattern: validMail, onChange: e => setMail(e.target.value) })}
				/>
				{errors.email && <p className="error">Nieprawidłowy format adresu e-mail</p>}

				<p className="title">Wystaw ocenę</p>
				<Select/>

				<div className="btns">
					<button onClick={previousPage} className="back">
						Powrót
					</button>
					<button type="submit" className="confirm" onClick={handleConfirmEditing}>
						{isEdit ? 'Zatwierdź' : 'Dodaj ucznia'}
					</button>
				</div>
			</form>
		</StyledAddEditStudent>
	)
}

export default AddStudent

import ProjectForm from '@/components/projects/ProjectForm'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ProjectFormData } from 'types'

const CreateProjectView = () => {
    const initialValues: ProjectFormData = {
        ProyectName: '',
        clientName: '',
        description: ''
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const handleFormSumite = (data: ProjectFormData) => {
        console.log(data)
    }
    return (
        <>
            <div className='max-w-3xl mx-auto'>
                <h1 className="text-5xl font-black">Crear Projecto</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear el projecto</p>
                <nav className="my-5">
                    <Link to='/' className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors">
                        Volver a Projectos
                    </Link>
                </nav>
                <form
                    className='mt-10 bg-white shadow-lg p-10 rounded-lg'
                    onSubmit={handleSubmit(handleFormSumite)}
                    noValidate
                >
                    <ProjectForm errors={errors} register={register} />
                    <input
                        type='submit'
                        value="Crear Projecto"
                        className='bg-fuchsia-600 hover:bg-fuchsia-700 w-full text-white p-3 uppercase font-bold rounded-md cursor-pointer transition-colors'

                    />
                </form>
            </div>
        </>
    )
}

export default CreateProjectView
import ButtonSubmit from "../components/Button";
import Input from "../components/Input";
import 'react-toastify/dist/ReactToastify.css';
import useAddController from "../hooks/useAddController.ts";


export default function AddUser() {
    const { onSubmit, register, handleSubmit, errors, addQuery} = useAddController();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <div className="flex flex-col items-center content-center justify-center h-screen bg-gray-100"> */}
                    <div className="bg-white min-w-[40vw] max-w-lg shadow-lg mx-auto py-10 lg:px-20 rounded-md">
                        <div className="flex items-center justify-center mt-5 text-center ">
                            <h1 className="text-5xl font-bold text-center text-green-950 mb-7 ">Ajouter </h1>
                        </div>
                        <Input type="email" placeholder="Email " {...register("email")} />
                        {errors?.email && (
                            <span className="text-sm text-rose-500 ">
                                {errors.email.message}
                            </span>
                        )}
                        <Input type="text" placeholder="Nom " {...register("name")} />
                        {errors?.name && (
                            <span className="text-sm text-rose-500 ">
                                {errors.name.message}
                            </span>
                        )}
                         <Input type="prenom" placeholder="prenom " {...register("prenom")} />
                        {errors?.prenom && (
                            <span className="text-sm text-rose-500 ">
                                {errors.prenom.message}
                            </span>
                        )} <Input type="ville" placeholder="ville " {...register("ville")} />
                        {errors?.ville && (
                            <span className="text-sm text-rose-500 ">
                                {errors.ville.message}
                            </span>
                        )}

                        <div className="w-full my-8 ">
                            <ButtonSubmit isForm={true} isLoading={addQuery.isSuccess} > Enregister </ButtonSubmit>

                        </div>
                    </div>

                {/* </div> */}

            </form>



        </>
    );
}


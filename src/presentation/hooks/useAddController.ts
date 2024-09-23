import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import User from "../../data/models/User.ts";
import { addUserUseCase } from "../../domain/usecases/addUserUseCase.ts";
import UserRepositoryImpl from "../../data/repositories/UserRepositoryImpl.ts";
import UserNetworkServiceImpl from "../../data/datasources/network/UserNetworkServiceImpl.ts";
import {useNavigate} from "react-router-dom";
import {STRING_ROUTE_USERS} from "../utils/const.ts";


function useAddController() {

    const add = addUserUseCase(new UserRepositoryImpl(new UserNetworkServiceImpl()));
    const navigate = useNavigate();

    const schema = yup
        .object({
            email: yup.string().email().required(),
            name: yup.string().min(8).required(),
            prenom: yup.string().min(8).required(),
            ville: yup.string().min(8).required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<User>({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });


    const onSubmit = async (data: User) => {
        if (add.isSuccess) return;
        await add.mutateAsync(data)
        console.log(add)
        navigate(STRING_ROUTE_USERS)
    };

    return {
        onSubmit, register, handleSubmit, errors, addQuery: add
    }

}

export default useAddController

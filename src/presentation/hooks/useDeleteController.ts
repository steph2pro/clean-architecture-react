import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { deleteUserUseCase } from "../../domain/usecases/DeleteUserUseCase";
import UserRepositoryImpl from "../../data/repositories/UserRepositoryImpl";
import UserNetworkServiceImpl from "../../data/datasources/network/UserNetworkServiceImpl";
import { STRING_ROUTE_USERS } from "../utils/const";

function useDeleteController() {
    // Utilisation du QueryClient de React Query pour invalider les requêtes
    const queryClient = useQueryClient();
    const deleteUser = deleteUserUseCase(new UserRepositoryImpl(new UserNetworkServiceImpl()));
    const navigate = useNavigate();

    // Fonction qui est déclenchée lors du clic sur le bouton de suppression
    const onDelete = async (id: number) => {
        if (deleteUser.isSuccess) return;
        try {
            await deleteUser.mutateAsync(id);
            
            // Invalidation de la requête pour forcer la mise à jour de la liste des utilisateurs
            queryClient.invalidateQueries({queryKey:['users']});
            
            navigate(STRING_ROUTE_USERS);  // Redirection après succès
        } catch (error) {
            console.error("Erreur lors de la suppression", error);
        }
    };

    return {
        onDelete,
        deleteQuery: deleteUser
    };
}

export default useDeleteController;

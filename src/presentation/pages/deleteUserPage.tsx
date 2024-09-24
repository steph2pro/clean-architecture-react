import React from "react";
import useDeleteController from "../hooks/useDeleteController";

export default function DeleteUserPages({ userId, closeModal }: { userId: number, closeModal: () => void }) {
    const { onDelete } = useDeleteController();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 mx-4 bg-white rounded-md shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-center text-green-950">
                    Voulez-vous vraiment supprimer cet utilisateur ?
                </h3>
                <div className="flex items-center justify-between">
                    <button
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                        onClick={() => onDelete(userId)}
                    >
                        Oui
                    </button>
                    <button
                        className="px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
                        onClick={closeModal}
                    >
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    );
}

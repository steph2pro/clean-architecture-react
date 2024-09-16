// src/presentation/components/AddUserModal.tsx
import React from 'react';
import { useFormik } from 'formik';
import { userValidationSchema } from '../validation/userValidation'; // Importer le schéma de validation

interface AddUserModalProps {
  onClose: () => void;
  onAddUser: (user: { name: string; prenom: string; email: string }) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose, onAddUser }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      prenom:'',
    },
    validationSchema: userValidationSchema, // Utiliser le schéma importé
    onSubmit: (values) => {
      onAddUser(values);
      onClose();
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-4">Ajouter un utilisateur</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="{mt-1 block w-full p-2 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm}"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">PreNom</label>
            <input
              type="text"
              name="prenom"
              value={formik.values.prenom}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="mt-1 block w-full p-2 border ${formik.touched.prenom && formik.errors.prenom ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm"
            />
            {formik.touched.prenom && formik.errors.prenom ? (
              <div className="text-red-500 text-sm">{formik.errors.prenom}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className={"mt-1 block w-full p-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm"}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
              Annuler
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;

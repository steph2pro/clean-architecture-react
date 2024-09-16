// src/validation/userValidation.ts
import * as Yup from 'yup';

// Définir le schéma de validation pour l'ajout d'un utilisateur
export const userValidationSchema = Yup.object({
  name: Yup.string()
    .required('Le nom est requis')
    .min(5, 'Le nom doit contenir au moins 5 caractères'),
prenom: Yup.string()
    .required('Le prenom est requis')
    .min(4, 'Le nom doit contenir au moins 4 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .matches(/^[a-zA-Z\s]+$/, 'Le prenom ne peut contenir que des lettres et des espaces'),
  email: Yup.string()
    .required('L\'email est requis')
    .email('L\'email doit être valide'),
  ville: Yup.string()
    .required('La ville est requis')
    .matches(/^[a-zA-Z\s]+$/, 'La ville ne peut contenir que des lettres et des espaces'),
});

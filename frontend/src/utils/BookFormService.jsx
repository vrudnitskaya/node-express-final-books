import { addBook, editBook } from './DBRequests';
import { allGenres, genresByAgeCategory } from '../components/Form/selectData';
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../AuthProvider";
import { useState } from "react";

const useForm = () => {
    const [selectedAgeCategory, setSelectedAgeCategory] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        publishedYear: '',
        pages: '',
        isbn: '',
        description: '',
        genre: '',
        ageCategory: '',
        status: '',
        language: '',
        coverImageUrl: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = useAuth();
    const { bookId } = useParams();

    const returnToDashboard = () => navigate('/dashboard');

    const genres = selectedAgeCategory
        ? [...genresByAgeCategory[selectedAgeCategory.value], ...allGenres].sort((a, b) =>
            a.label.localeCompare(b.label)
        )
        : [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '', form: '' });
    };

    const handleAgeCategoryChange = (selectedOption) => {
        setSelectedAgeCategory(selectedOption);
        setFormData({ ...formData, ageCategory: selectedOption.value });
        setFormErrors((formErrors) => ({
            ...formErrors,
            ageCategory: '',
        }));
    };

    const handleGenreChange = (selectedOption) => {
        let result = [];
        if (selectedOption) {
            result = selectedOption.map((item) => item.value);
        }
        setSelectedGenre(selectedOption);
        setFormData({ ...formData, genre: result });
        setFormErrors((formErrors) => ({
            ...formErrors,
            genre: '',
        }));
    };


    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
        setFormData({ ...formData, language: selectedOption.value });
        setFormErrors((formErrors) => ({
            ...formErrors,
            language: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.title ||
            !formData.author ||
            !formData.publisher ||
            !formData.publishedYear ||
            !formData.pages ||
            !formData.description ||
            !formData.genre ||
            !formData.ageCategory
        ) {
            setFormErrors({
                ...formErrors,
                title: !formData.title
                    ? 'Please provide book title' : '',
                author: !formData.author
                    ? 'Please provide the information about the author' : '',
                publisher: !formData.publisher
                    ? 'Please provide the information about the publisher' : '',
                publishedYear: !formData.publishedYear
                    ? 'Please provide the year of the publish' : '',
                pages: !formData.pages
                    ? 'Please provide the page count' : '',
                description: !formData.description
                    ? 'Please provide the description' : '',
                genre: !formData.genre
                    ? 'Please select genre' : '',
                ageCategory: !formData.ageCategory
                    ? 'Please specify the age category' : '',
            });
            return;
        }

        try {
            setIsLoading(true);
            let response;
            if (bookId) response = await editBook(token, formData, bookId);
            else response = await addBook(token, formData);

            if (response.status === 201 || response.status === 200) {
                setIsLoading(false);
                setFormErrors({});
                returnToDashboard();
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);
            setFormErrors({ ...formErrors, form: error.message })
        }
    };
    console.log('formData', formData)
    return {
        selectedAgeCategory,
        setSelectedAgeCategory,
        selectedGenre,
        setSelectedGenre,
        selectedLanguage,
        setSelectedLanguage,
        formData,
        setFormData,
        formErrors,
        setFormErrors,
        genres,
        returnToDashboard,
        handleChange,
        handleAgeCategoryChange,
        handleGenreChange,
        handleLanguageChange,
        handleSubmit,
        isLoading,
        setIsLoading
    };
};

export default useForm;
import { ageCategories, allGenres, bookLanguage, genresByAgeCategory } from '../Form/selectData';

import BookForm from "../Form/BookForm";
import Spinner from '../Layouts/Spinner';
import { getSingleBook } from '../../utils/DBRequests';
import { useAuth } from '../../AuthProvider';
import { useEffect } from 'react';
import useForm from '../../utils/BookFormService';
import { useParams } from 'react-router-dom';

const EditBook = () => {
    const { bookId } = useParams();
    const { token } = useAuth();
    const {
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
        isLoading,
        setIsLoading,
        returnToDashboard,
        handleChange,
        handleAgeCategoryChange,
        handleGenreChange,
        handleLanguageChange,
        handleSubmit 
    } = useForm();

    useEffect(() => {
        setIsLoading(true);
        const getBookDetails = async () => {
            try {
                const response = await getSingleBook(token, bookId);
                if (response.data.book) {
                    setSelectedLanguage({
                        value: response.data.book.language,
                        label: response.data.book.language,
                    });
                    setSelectedAgeCategory({
                        value: response.data.book.ageCategory,
                        label: response.data.book.ageCategory,
                    });
                    const genreOptions = response.data.book.genre.map(genre => ({
                        value: genre,
                        label: genre,
                    }));
                    setSelectedGenre(genreOptions);
                    setFormData({
                        ...formData,
                        title: response.data.book.title,
                        author: response.data.book.author,
                        publisher: response.data.book.publisher,
                        publishedYear: response.data.book.publishedYear,
                        pages: response.data.book.pages,
                        isbn: response.data.book.isbn,
                        description: response.data.book.description,
                        status: response.data.book.status,
                        genre:response.data.book.genre,
                        language:response.data.book.language,
                        ageCategory:response.data.book.ageCategory,
                        coverImageUrl:response.data.book.coverImageUrl,
                    });
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
                setFormErrors({ form: 'Error loading book details' });
                setIsLoading(false);
            }
        };

        getBookDetails();
    }, [bookId, token]);

    if (isLoading) return <Spinner />;
    return (
        <div className="w-full h-full bg-lightGreen flex flex-col items-center">
            <h1 className="mt-10 text-xl font-medium text-black">Edit Book</h1>
            <BookForm
                ageCategories={ageCategories}
                bookLanguage={bookLanguage}
                genres={genres}
                selectedAgeCategory={selectedAgeCategory}
                setSelectedAgeCategory={handleAgeCategoryChange}
                selectedGenre={selectedGenre}
                setSelectedGenre={handleGenreChange}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={handleLanguageChange}
                onChange={handleChange}
                onReturn={returnToDashboard}
                formErrors={formErrors}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
            />
        </div>
    );
};

export default EditBook;
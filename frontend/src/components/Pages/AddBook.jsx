import { ageCategories, bookLanguage } from '../Form/selectData';

import BookForm from "../Form/BookForm";
import useForm from '../../utils/BookFormService';

const AddBook = () => {
    const {
        selectedAgeCategory, 
        selectedGenre, 
        selectedLanguage, 
        formData,
        formErrors, 
        genres,
        isLoading,
        returnToDashboard,
        handleChange,
        handleAgeCategoryChange,
        handleGenreChange,
        handleLanguageChange,
        handleSubmit 
    } = useForm();
   
    return (
        <div className="w-full h-full bg-lightGreen flex flex-col items-center">
            <h1 className="mt-10 text-xl font-medium text-black">Add a New Book to Library</h1>
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
            />
        </div>
    );
};

export default AddBook;
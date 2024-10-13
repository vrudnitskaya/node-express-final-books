import CustomSelect from './CustomSelect';
import Input from './Input';
import ScrollToTop from '../Layouts/ScrollToTop';

const BookForm = ({
  ageCategories,
  bookLanguage,
  genres,
  selectedAgeCategory,
  setSelectedAgeCategory,
  selectedGenre,
  setSelectedGenre,
  selectedLanguage,
  setSelectedLanguage,
  onChange,
  onReturn,
  formErrors,
  onSubmit,
  formData,
  setFormData
}) => {
  return (
    <>
    <form className='w-10/12 flex flex-col my-10 items-center' onSubmit={onSubmit}>
      {formErrors.form && <p className='text-red'>{formErrors.form}</p>}
      
      <div className='flex w-full flex-col md:flex-row gap-10'>
        {/* Left Column */}
        <div className='flex flex-col w-full md:w-1/2'>
          <Input 
            id="title" 
            type="text" 
            name="title" 
            min='2' 
            max='100' 
            onChange={onChange} 
            error={formErrors.title} 
            value={formData.title}
          >
            Title:
          </Input>

          <Input 
            id="author" 
            type="text" 
            name="author" 
            min='2' 
            max='100' 
            onChange={onChange} 
            error={formErrors.author} 
            value={formData.author}
          >
            Author:
          </Input>

          <div className='mb-3'>
            <p className='text-black mb-2'>Age Category:</p>
            <CustomSelect
              placeholder='Select ...'
              options={ageCategories}
              multiple={false}
              onChange={setSelectedAgeCategory}
              value={selectedAgeCategory}
            />
            {formErrors.ageCategory && <p className='text-red mb-6'>{formErrors.ageCategory}</p>}
          </div>

          {selectedAgeCategory && (
            <div className='mb-3'>
              <p className='text-black mb-2'>Select Genre:</p>
              <CustomSelect
                placeholder='Select ...'
                options={genres}
                multiple={true}
                onChange={setSelectedGenre}
                value={selectedGenre}
              />
              {formErrors.genre && <p className='text-red mb-6'>{formErrors.genre}</p>}
            </div>
          )}

          <Input 
            id="publisher" 
            type="text" 
            name="publisher" 
            min='2' 
            max='100' 
            onChange={onChange} 
            error={formErrors.publisher} 
            value={formData.publisher}
          >
            Publisher:
          </Input>

          <Input 
            id="publishedYear" 
            type="number" 
            name="publishedYear" 
            min='1440' 
            onChange={onChange} 
            error={formErrors.publishedYear} 
            value={formData.publishedYear}
          >
            Published Year:
          </Input>

          <div className='flex flex-col'>
            <label htmlFor="coverImageUrl" className="mr-2">Link to Book Cover Image:</label>
            <div className="relative flex-grow">
              <Input
                id="coverImageUrl"
                type="url"
                name="coverImageUrl"
                onChange={onChange}
                value={formData.coverImageUrl}
                pattern="https?://.*\.(jpg|png)$"
                title="Please enter a valid URL that ends with .jpg or .png"
                className="pr-10" 
              />
              <button
                type="button" 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 font-bold text-red-600'
                onClick={() => setFormData({ ...formData, coverImageUrl: '' })}
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex flex-col w-full md:w-1/2'>
          <Input 
            id="pages" 
            type="number" 
            name="pages" 
            min='2' 
            onChange={onChange} 
            error={formErrors.pages} 
            value={formData.pages}
          >
            Page Count:
          </Input>

          <Input 
            id="isbn" 
            name="isbn" 
            type="text" 
            onChange={onChange} 
            value={formData.isbn}
          >
            ISBN:
          </Input>

          <div className="flex gap-2 flex-col mt-2 mb-8">
            <p className="w-full mb-1">The Reading Status:</p>
            <div className="w-full flex justify-between">
              {['To Read', 'Reading', 'Finished'].map(status => (
                <label className="flex gap-1 items-center" key={status}>
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    className="w-4 h-4 accent-mustard focus:mustard"
                    onChange={onChange}
                    checked={formData.status === status}
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>

          <div className='mb-3'>
            <p className='text-black mb-1'>Language:</p>
            <CustomSelect
              placeholder='Select ...'
              options={bookLanguage}
              multiple={false}
              onChange={setSelectedLanguage}
              value={selectedLanguage}
            />
          </div>

          <div className='w-full flex flex-col gap-2 mb-6'>
            <label htmlFor="description" className='text-black'>Description:</label>
            <textarea
              type="description"
              name="description"
              id='description'
              value={formData.description}
              onChange={onChange}
              className='border-2 border-grey rounded-md p-2 h-32'
              min='2'
              max='300'
            />
            {formErrors.description && <p className='text-red'>{formErrors.description}</p>}
          </div>
        </div>
      </div>

      <div className='flex w-full md:w-1/2 gap-4 mt-4 font-spartan text-xl font-medium'>
        <button type='submit' className='bg-green w-1/2 h-8 border-2 border-green rounded-md text-pureWhite hover:bg-pureWhite hover:text-green'>
          Save
        </button>
        <button type='button' className='bg-mustard w-1/2 h-8 border-2 border-mustard rounded-md text-pureWhite hover:bg-pureWhite hover:text-mustard' onClick={onReturn}>
          Cancel
        </button>
      </div>
    </form>
    <ScrollToTop/>
    </>
    
  );
};

export default BookForm;
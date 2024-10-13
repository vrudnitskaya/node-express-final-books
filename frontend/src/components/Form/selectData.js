export const allGenres = [
    { value: 'Art & Architecture', label: 'Art & Architecture' },
    { value: 'Arts & Crafts', label: 'Arts & Crafts' },
    { value: 'Biography', label: 'Biography' },
    { value: 'Classics', label: 'Classics' },
    { value: 'Cooking & Food', label: 'Cooking & Food' },
    { value: 'Comics And Graphic Novels', label: 'Comics And Graphic Novels' },
    { value: 'Entertainment & Performing Arts', label: 'Entertainment & Performing Arts' },
    { value: 'Fiction & Literature', label: 'Fiction & Literature' },
    { value: 'Games & Activities', label: 'Games & Activities' },
    { value: 'Harry Potter', label: 'Harry Potter' },
    { value: 'Health & Medicine', label: 'Health & Medicine' },
    { value: 'History', label: 'History' },
    { value: 'Holidays & Festivals', label: 'Holidays & Festivals' },
    { value: 'Nature', label: 'Nature' },
    { value: 'Poetry', label: 'Poetry' },
    { value: 'Politics, Government & Law', label: 'Politics, Government & Law' },
    { value: 'Religion & Beliefs', label: 'Religion & Beliefs' },
    { value: 'Nonfiction', label: 'Nonfiction' },
    { value: 'Science & Technology', label: 'Science & Technology' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Humor', label: 'Humor' },
    { value: 'Crafts & Hobbies', label: 'Crafts & Hobbies' },
    { value: 'Computers', label: 'Computers' }
];

export const genresByAgeCategory = {
    Children: [
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Animal Stories', label: 'Animal Stories' },
        { value: 'Fairy Tales, Myths & Fables', label: 'Fairy Tales, Myths & Fables' },
        { value: 'Learning Basic Concepts', label: 'Learning Basic Concepts' },
        { value: 'Insects', label: 'Insects' },
        { value: 'Picture Books', label: 'Picture Books' },
        { value: 'Chapter Books', label: 'Chapter Books' },
        { value: 'Sports & Adventure', label: 'Sports & Adventure' },
        { value: 'Transportation', label: 'Transportation' }
    ],
    'Teens & Young Adult': [
        { value: 'Romance', label: 'Romance' },
        { value: 'Dystopian', label: 'Dystopian' },
        { value: 'Coming of Age', label: 'Coming of Age' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Mystery', label: 'Mystery' }
    ],
    Adult: [
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Self-help', label: 'Self-help' },
        { value: 'Science Fiction', label: 'Science Fiction' },
        { value: 'Philosophy', label: 'Philosophy' },
        { value: 'Psychology', label: 'Psychology' },
        { value: 'True Crime', label: 'True Crime' },
        { value: 'Parenting & Family', label: 'Parenting & Family' }
    ]
};

export const ageCategories = [
    { value: 'Children', label: 'Children' },
    { value: 'Teens & Young Adult', label: 'Teens & Young Adult' },
    { value: 'Adult', label: 'Adult' },
];

export const bookLanguage = [
    { value: 'English', label: 'English' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'German', label: 'German' },
    { value: 'French', label: 'French' },
    { value: 'Russian', label: 'Russian' },
    { value: 'Other', label: 'Other' },
];

export const readingStatus = [
    { value: 'To Read', label: 'To Read' },
    { value: 'Reading', label: 'Reading' },
    { value: 'Finished', label: 'Finished' },
];

export const sortingOptions = [
    { value: 'title', label: 'Title (A-Z)' },
    { value: '-title', label: 'Title (Z-A)' },
    { value: 'createdAt', label: 'Date (oldest first)' },
    { value: '-createdAt', label: 'Date (newest first)' },
];

type TUser = string | number | boolean;

const formatValue = (user: TUser) => {
    if (typeof user === 'number') {
        return user * 10
    }
    else if (typeof user === 'string') {
        return user.toLocaleUpperCase()
    }
    else if (typeof user === 'boolean') {
        return !user
    }
};


type TArray = string | number[];

const getLength = (user: TArray) => {
    if (typeof user === 'string') {
        const toSplit = user.split('').length;
        return toSplit;
    }
    else if (Array.isArray(user)) {
        return user.length
    }
};


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
};


type TAllBook = {
    title: string;
    rating: number;
};

const filterByRating = (items: TAllBook[]) => {
    return items.filter((item) => item.rating > 4);
}

const books: TAllBook[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

filterByRating(books)


type TAllUser = {
    id: number;
    name: string;
    email: String;
    isActive: boolean;
}[];


const users: TAllUser = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const filterActiveUsers = users.reduce((acc, item) => {

    const { isActive } = item;
    const key = isActive ? 'true' : 'false';
    if (!acc[key]) {
        acc[key] = [];
    }
    if (isActive === true) {
        acc[key].push(item)
    }
    return acc

}, {} as Record<string, TAllUser>);



interface IUser {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
};

const printBookDetails = (book: IUser) => {
    const availability = book.isAvailable ? 'Yes' : "No"
    console.log(
        `Title:${book.title} Author:${book.author} Published${book.publishedYear} Available:${book.isAvailable} `
    )

}


const myBook: IUser = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook)



type TNumber = number[];

const getUniqueValues = (user1: TNumber, user2: TNumber) => {
    const toSpread = [...user1, ...user2];
    const removeDuplicate = new Set(toSpread)
    return [...removeDuplicate]

};


type TName = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const products: TName[] = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const calculateTotalPrice = products.reduce((subtotal, item) => {
    const total = subtotal + item.price * item.quantity;
    return total
}, 0)




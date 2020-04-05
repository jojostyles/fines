const expect = require('chai').expect;
const UserMongo = require('../database/user-mongo').UserMongo;
const TestDbHelper = require('./test_db_helper').TestDbHelper;

const DbHelper = new TestDbHelper();
let User;

/**
 * Before each test, start the Db helper and create the User model
 */
beforeEach(async () => {
    await DbHelper.start();
    User = new UserMongo(DbHelper.connection);
});

/**
 * After each test, clean up the database
 */
afterEach(async () => {
    await DbHelper.cleanup();
});

/**
 * After all tests, stop the database.
 */
after(async () => {
    await DbHelper.stop();
});

describe('Testing the user detail model method', () => {

    it('Reads one user', async () => {
        let expected = await validUser();
        let actual = await User.get_user_detail(expected._id);
        compareUsers(actual, expected);
    });
    
    it('user not present and so it returns null', async () => {
        let dummy = await validUser();
        id = dummy._id;
        await DbHelper.deleteDoc('users', dummy);
        let user = await User.get_user_detail(id);
        expect(user).to.be.null;
    });
});

describe('Testing the list of users model method', async () => {
    it('Reads all users in database', async() => {
        let expected = await listOfValidUsers();
        let result = await User.get_list_of_users();
        // This assumes that they are returned in the same order
        for(index=0; index < result.length; index++){
            compareUsers(result[index], expected[index]);
        }
    });
});

/**
 * Returns a list of users
 */
async function listOfValidUsers() {
    let users = [];
    for(i = 0; i < 10; i++){
        let user = await DbHelper.createDoc('users', {
            credit: i,
            role: 'User',
            fines: [],
            first_name: 'Joe',
            last_name: 'Tripodi'
        });
        users.push(user);
    }
    return users;
}

/**
 * Returns a valid user
 */
async function validUser() {
    let user = await DbHelper.createDoc('users', {
        credit: 0,
        role: 'User',
        fines: [],
        first_name: 'Joe',
        last_name: 'Tripodi'
    });
    return user;
}

/**
 * Compares two users using chai expect.
 * @param {user} user1 
 * @param {user} user2 
 */
function compareUsers(user1, user2){
    let keys = ['credit', 'role', 'fines', 'first_name', 'last_name'];
    for (let key of keys){
        expect(user1[key]).to.eql(user2[key], `comparing user1[${key}]=${user1[key]} with user2[${key}]=${user2[key]}`);
    }
}

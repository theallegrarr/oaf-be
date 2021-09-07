const db = require('./service')

const create_seasons = `CREATE TABLE IF NOT EXISTS Seasons (
    SeasonID INTEGER PRIMARY KEY AUTOINCREMENT,
    SeasonName VARCHAR(255) NOT NULL,
    StartDate VARCHAR(255) NOT NULL,
    EndDate VARCHAR(255) NOT NULL
);`;

const create_customers = `CREATE TABLE IF NOT EXISTS Customers (
    CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerName VARCHAR(255) NOT NULL
);`;

const create_summaries = `CREATE TABLE IF NOT EXISTS CustomerSummaries (
    SeasonID INTEGER NOT NULL,
    TotalRepaid INTEGER,
    TotalCredit INTEGER,
    CustomerID INTEGER NOT NULL,
    FOREIGN KEY (CustomerID)
        REFERENCES Customers (CustomerID),
    FOREIGN KEY (SeasonID)
        REFERENCES Seasons (SeasonID)
);`;

const create_admin = `CREATE TABLE IF NOT EXISTS "admin" (
	"username"	TEXT NOT NULL UNIQUE,
	"password"	TEXT NOT NULL
);`;

const seed = async () => {
    try {
        console.log("seeding.....")
        const err1 = await db.seed(create_seasons)
        const err2 = await db.seed(create_customers)
        const err3 = await db.seed(create_summaries)
        const err4 = await db.seed(create_admin)

        if(err1||err2||err3||err4){
            console.log(err1, err2, err3, err4)
        } else {
            console.log("seasons seed done")
        }   
    } catch(error){
        console.log(error)
    }     
}

seed()

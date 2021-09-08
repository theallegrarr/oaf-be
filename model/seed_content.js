const db = require('./service')

const insert_into_seasons = `INSERT INTO Seasons (SeasonID, SeasonName, StartDate, EndDate) VALUES
                             ('2011', 'Wet Season', '2011-01-01 00:00:00.000', '2011-04-01 00:00:00.000'),
                             ('2012', 'Dry Season', '2012-01-01 00:00:00.000', '2012-04-01 00:00:00.000'),
                             ('2013', 'Humid Season', '2013-01-01 00:00:00.000', '2013-04-01 00:00:00.000');`;

const insert_into_customers = `INSERT INTO Customers (CustomerName) VALUES
                                ('John Doe'),
                                ('Jane Doe'),
                                ('Peter Pan');`

const insert_into_summaries = `INSERT INTO CustomerSummaries (SeasonID, TotalRepaid, TotalCredit, CustomerID) VALUES
                                ('2011', '400', '700', '1'),
                                ('2012', '200', '900', '2'),
                                ('2013', '200', '900', '1'),
                                ('2013', '200', '900', '2'),
                                ('2011', '200', '900', '3'),
                                ('2013', '800', '1700', '3');`;

const insert_admin = `INSERT INTO admin (username, password) VALUES ('admin', '$2b$10$./p3Txs3ULys2q9RbHgTsOWnUXw9Okpa4.EhkIJP.w03wD4Xcdtju');`;

const seed = async () => {
    try {
        console.log("seeding.....")
        const err1 = await db.seed(insert_into_seasons)
        const err2 = await db.seed(insert_into_customers)
        const err3 = await db.seed(insert_into_summaries)
        const err4 = await db.seed(insert_admin)

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
const getAdmin = `SELECT * from admin where username='admin'`;

const getCustomerSummaries = `select * from Customers
                            left join CustomerSummaries on Customers.CustomerID=CustomerSummaries.CustomerID`;

// const updateCustomerSummary = (data) => {
//     let query=``
//     data.forEach(element => {
//         let { c_id, credit, repaid, season } = element
//         query += `UPDATE CustomerSummaries
//                   SET TotalCredit = ${credit}, TotalRepaid = ${repaid} 
//                   WHERE CustomerID = ${c_id} and SeasonID=${season}; \n`;
//     });
//     //console.log(query)
//     return query
// }

/*
frontend call should have array of
[{
    Repaid,
    customer id,
    season id
}]
*/

const updateCS = (data) => {
    let { Repaid, CustomerID, SeasonID } = data
    return `UPDATE CustomerSummaries
                SET TotalRepaid = ${Repaid} 
                WHERE CustomerID = ${CustomerID} and SeasonID=${SeasonID}; \n`;
}

module.exports = {
    getAdmin,
    getCustomerSummaries,
    //updateCustomerSummary,
    updateCS
}
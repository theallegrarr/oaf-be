const getAdmin = `SELECT * from admin where username='admin'`;
const getCustomerSummaries = `select * from Customers
                      left join CustomerSummaries on Customers.CustomerID=CustomerSummaries.CustomerID`;

module.exports = {
    getAdmin,
    getCustomerSummaries
}
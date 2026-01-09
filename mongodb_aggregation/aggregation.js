db.users.find({ city: "bangalore" }, { _id: 0, name: 1 })


db.users.insertMany([
    {
        _id: 1, name: "Alice", age: 28, city: "Bangalore", salary: 60000,
        skills: ["MongoDB", "Node.js"], departmentId: 101
    },
    {
        _id: 2, name: "Bob", age: 32, city: "Mumbai", salary: 50000, skills:
            ["HR", "Recruitment"], departmentId: 102
    },
    {
        _id: 3, name: "Charlie", age: 25, city: "Bangalore", salary: 55000,
        skills: ["MongoDB", "Python"], departmentId: 101
    },
    {
        _id: 4, name: "David", age: 35, city: "Delhi", salary: 70000, skills:
            ["Finance", "Excel"], departmentId: 103
    },
    {
        _id: 5, name: "Eva", age: 29, city: "Hyderabad", salary: 65000, skills:
            ["React", "Node.js"], departmentId: 101
    },
    {
        _id: 6, name: "Frank", age: 41, city: "Mumbai", salary: 80000, skills:
            ["Management"], departmentId: 104
    },
    {
        _id: 7, name: "Grace", age: 26, city: "Bangalore", salary: 52000,
        skills: ["Testing"], departmentId: 105
    },
    {
        _id: 8, name: "Henry", age: 34, city: "Delhi", salary: 72000, skills:
            ["DevOps"], departmentId: 101
    },
    {
        _id: 9, name: "Ivy", age: 31, city: "Chennai", salary: 48000, skills:
            ["Support"], departmentId: 102
    },
    {
        _id: 10, name: "Jack", age: 27, city: "Bangalore", salary: 58000,
        skills: ["MongoDB", "Express"], departmentId: 101
    }
])


db.collection_name.aggregation([
    { stage1 }
{ stage2 }
{ stage3 }
])

{ $match: { city: "Mumbai" } }

db.users.aggregation([
    { $match: { city: "Mumbai" } }
])



{ vegetables }
{ cut }
{put boul on gas }
{final result }


unwind:
----------
    [
        {
            name: "venu",
            id: 1,
            details: [
                { "course": "java" },
                { "course": "javascript" }
            ]
        },
        {
            name: "sudheer",
            id: 2,
            details: [
                { "course": "java" },
                { "course": "javascript" }
            ]
        }]

result:
------
    [
        {
            name: "venu",
            id: 1,
            { "course": "java" }
           
        },
        {
            name: "venu",
            id: 1,
            { "course": "javascript" }
           
        },
        {
            name: "sudheer",
            id: 2,
           { "course": "javascript" }
        },
        {
            name: "sudheer",
            id: 2,
           { "course": "javascript" }
        }
    ]



{
    $lookup: {
        form:
        localField:
        foreinField:
        as:
}
}

db.users.aggregate([

    {
        $lookup:
        {
            form:"orders",
            localField:"_id",
            foreinField:"userId",
            as:"finalResult"
        }
    }

])


$lookup:
--------

users

orders

products

[
    {stage1},
    {stage2},
    {stage3},
    -------
]

lookup at a time you join 2 collections (users, orders) -> (result, products)


syntax:
-------


{
    $lookup: {

        from: 
        localField:
        foreignField:
        as: 

    }
}

(users, orders)

db.users.aggregate([
    {
        $lookup: {
            from: "orders",
            localField:"_id",
            foreignField:"userId",
            as: "result"

        }
    }
])


primaryKey --> unique key in a table (no duplicates)
forignKey  ---> 
one table primary key will act as a forignKey in another table it contais dupicates,
 it will generate relation between two tables



 maximum orders in a single month:
 ----------------------------------

 orders

 users

 orderDate

 $sum

$month

$year



db.orders.aggregate([
    {
        $group: {
            _id: {
                userId: "$userId",
                month: {$month: "$orderDate"},
                year: {$year: "$orderDate"} 
            },
            totalOrders: {$sum: 1}
        }
    },
    {$sort: {totalOrders: -1}},
    {$limit: 1},

    {
        $lookup: {
            from: "users",
            localField: "_id.userId",
            foreignField: "_id",
            as: "userInfo"
        }
    },
    {$project:{
        userId: "$_id.userId",
        month: "$_id.userId",
        year: "$_id.year",
        totalOrders:1,
        userName: "$userInfo.name",
        city: "$userInfo.city",
        _id:0
    }}
])


{
  _id: {
    userId: 5,
    month: 2,
    year: 2025
  },
  totalOrders: 1,
  userInfo: [
    {
      _id: 5,
      name: 'harshaveena',
      city: 'LA'
    }
  ]
}





in a single year:
-------------------


db.orders.aggregate([
    {
        $group: {
            _id: {
                userId: "$userId",
                year: {$year: "$orderDate"} 
            },
            totalOrders: {$sum: 1}
        }
    },
    {$sort: {totalOrders: -1}},
    {
        $lookup: {
            from: "users",
            localField: "_id.userId",
            foreignField: "_id",
            as: "userInfo"
        }
    },
    {$unwind: "$userInfo"},
    {$project:{
        userId: "$_id.userId",
        month: "$_id.userId",
        year: "$_id.year",
        totalOrders:1,
        userName: "$userInfo.name",
        city: "$userInfo.city",
        _id:0
    }}
])



most sold products in a single years:
----------------------------------------

orders

products

quantity

db.orders.aggregate([
    {
        $group: {
            _id: "$productId",
            totalQuantity:{$sum: "$quantity"}
        }
    },
    {
        $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "_id",
            as: "result"
        }
    }
])


user name, product name, product price, orderinfo:
--------------------------------------------------

users 
orders
products

db.users.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "userId",
            as:"orders"
        }
    },
    {$unwind: "$orders"},
    {
        $lookup: {
            from: "products",
            localField: "orders.productId",
            foreignField: "_id",
            as: "product"
        }
    },
    {$unwind: "$product"},
    {$project: {
        _id:0,
        userName:"$name",
        city:1,
        productName: "$product.name",
        productPrice: "$product.price",
        quantity: "$orders.quantity",
        orderDate: "$orders.orderDate"

    }}

])














//  db.orders.aggregate([
//     {
//         $group: {
//             _id: {
//                 userId: "$userId",
//                 month: {$month: "$orderDate"},
//                 year: {$year: "$orderDate"},
//             },
//             totalOrders: {$sum: 1}
//         }
//     }
//  ])












db.products.insertMany([
{ _id: 101, name: "Laptop", price: 1200 },
{ _id: 102, name: "Phone", price: 800 },
{ _id: 103, name: "Tablet", price: 600 },
{ _id: 104, name: "Headphones", price: 150 },
{ _id: 105, name: "Keyboard", price: 100 },
{ _id: 106, name: "Mouse", price: 50 },
{ _id: 107, name: "Monitor", price: 300 },
{ _id: 108, name: "Printer", price: 250 },
{ _id: 109, name: "Camera", price: 900 },
{ _id: 110, name: "Speaker", price: 200 }
])




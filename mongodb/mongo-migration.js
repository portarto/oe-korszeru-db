db
  .departments
  .aggregate([{
    $lookup: {
      from: "employees",
      localField: "department_id",
      foreignField: "department_id",
      as: "employees"
    }},{
      $merge: {into: "departments"}
    }
  ])
;

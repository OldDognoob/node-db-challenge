

exports.seed = function(knex) {
  return knex("resources")
    .del()
    .then(function() {
      return knex("resources").insert([
        {
          resource_name: "Recource 1",
          resource_description: "Read careful project requirements"
        },
        {
          resource_name: "Recource 2",
          resource_description: "Revise the Tool kit"
        },
        {
          resource_name: "Recource 3",
          resource_description: "Remember to set up correctly"
        },
        {
          resource_name: "Recource 4",
          resource_description: "Finish all MVP points"
        },
        {
          resource_name: "Recource 5",
          resource_description: "Do not attempt to leave"
        },
        {
          resource_name: "Recource 6",
          resource_description: "Pray that you have pass"
        }
      ]);
    });
};
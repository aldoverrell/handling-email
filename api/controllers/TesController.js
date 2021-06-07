
module.exports = {
  friendlyName: "Save report",

  description: "Save report from replied email",

  inputs: {
    nama: {
      type: "string",
      description: "where email is come from",
    },
  },

  exits: {
    success: {
      description: "Successfully save report.",
    },
  },

  saveReport: async function (req, inputs, exits) {
    console.log(req);
    console.log(inputs);
    sails.myObj = {
      req: req
    }
    return exits.success()
  },
};

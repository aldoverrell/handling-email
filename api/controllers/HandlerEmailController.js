
module.exports = {
  friendlyName: "Save report",

  description: "Save report from replied email",

  inputs: {
    From: {
      type: "string",
      description: "where email is come from",
    },
    To: {
      type: "string",
      description: "where email will be send",
    },
    Subject: {
      type: "string",
      description: "subject of the email",
    },
    "stripped-text": {
      type: "ref",
      description: "email content",
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
  },
};

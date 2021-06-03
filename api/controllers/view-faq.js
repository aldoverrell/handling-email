module.exports = {


  friendlyName: 'View faq',


  description: 'Display "FAQ" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/faq'
    }

  },


  fn: async function () {

    let msg = "masuk";
    if(sails.myObj == undefined){
      msg = "gak masukkk"
    }
    // Respond with view.
    return {
      msg: msg
    };

  }


};

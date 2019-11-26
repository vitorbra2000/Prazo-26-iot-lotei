
var getTestimonials = function() {
  var testimonials = [
    {
      id: 1,
      name: 'Fulano de tal',
      company: 'Catolica SC',
      title: 'Cara da TI',
      testimony: 'Eu gosto muito de javascript'
    },
    {
      id: 2,
      name: 'paulao',
      company: 'Catolica SC',
      title: 'esquina',
      testimony: 'Eu tb gosto do paulao'
    }
  ];

  return testimonials;
}

module.exports = {
  getTestimonials: getTestimonials
}


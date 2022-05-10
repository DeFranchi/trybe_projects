const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  customer.lasName = 'Faria';
  console.log(customer)

  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };

  customer2['lastName'] = 'Silva';
  let newKey = 'FavoriteColor';
  const FavoriteColor = 'Blue';
  customer2[newKey]= FavoriteColor;
  newKey = 'all Informations: ';
  const allInfos = `${customer2.firstName} ${customer2.lastName} your favorite color is ${customer2.FavoriteColor}` 
  console.log(allInfos);

  

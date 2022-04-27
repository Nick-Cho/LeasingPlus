
export function stripeAccountSetup(user_id){
  // Set your secret key. Remember to switch to your live secret key in production.
  // See your keys here: https://dashboard.stripe.com/apikeys
  const stripe = require('stripe')('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');
  let acc_str = "acct_"
  const accountLink = await stripe.accountLinks.create({
    
    account: acc_str.concat(user_id),
    refresh_url: 'https://localhost:3000/reauth',
    return_url: 'https://localhost:3000/return',
    type: 'account_onboarding',
  });

  console.log(accountLink);
}

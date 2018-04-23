
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('coincap').del().then(function() {
        // Inserts seed entries
        return knex('coincap').insert([
            {
                btc_usd: '8877.41',
                alt_name: 'Ethereum',
                rate: '0.071',
                alt_usd: '634.31'
            },
            {
                btc_usd: '8878.42',
                alt_name: 'Litecoin',
                rate: '0.016',
                alt_usd: '148.04'
            },
            {
                btc_usd: '8884.95',
                alt_name: 'Dash',
                rate: '0.052',
                alt_usd: '463.37'
            }

        ]);
    });
};

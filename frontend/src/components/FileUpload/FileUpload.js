import { useMutation } from '@apollo/client';
import CREATE_VENUE from '../../client/api/queries/createVenue';

function FileUplod() {
  const [createVenue, { data }] = useMutation(CREATE_VENUE);

  return (
    <div>
      <input
        type="file"
        required
        onChange={(event) => {
          const vars = {
            name: 'KIWI TEST',
            address: {
              country: 'Norway',
              city: 'Oslo',
              postalCode: '0864',
              street: 'Nordstrøm',
            },
            maxCapacity: 100,
            venueType: 'shop',
            logo: null
          };
          vars.logo = event.target.files;
          createVenue({ variables: vars }).then(() => console.log(data)).catch(err => console.log(err));
        }}
      />
    </div>
  );
}

export default FileUplod;

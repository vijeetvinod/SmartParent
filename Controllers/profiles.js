import Profile from '../models/profile';
import moment from 'moment';

export const index = (req, res, next) => {
  // Find all movies and return json response
  Profile.find({'email': 'test4@test.com'}).lean().exec((err, profiles) => res.json(
    // Iterate through each movie
    { profiles: profiles.map(profile => ({
      ...profile,
     }))}
  ));
};
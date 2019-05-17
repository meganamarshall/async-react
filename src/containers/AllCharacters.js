import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';
import { withFetch } from '../components/withFetch';


export default withFetch(getCharacters, [], 'characters')(Characters);


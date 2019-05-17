import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';
import { withFetch } from '../containers/withFetch';


export default withFetch(getCharacters, [], 'characters')(Characters);


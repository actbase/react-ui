export * from './card.types';
import InternalCard from './card';

const Card = InternalCard as typeof InternalCard;

export default Card;

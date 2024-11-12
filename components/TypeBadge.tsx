import React from 'react';
import { TypeBadgeProps } from '../interfaces/TypeBadgeProps';
import { Badge } from './ui/badge';

const typeColors: { [key: string]: string } = {
  Normal: '#9FA19F',
  Fighting: '#FF8000',
  Flying: '#81B9EF',
  Poison: '#9141CB',
  Ground: '#915121',
  Rock: '#AFA981',
  Bug: '#91A119',
  Ghost: '#704170',
  Steel: '#60A1B8',
  Fire: '#E62829',
  Water: '#2980EF',
  Grass: '#3FA129',
  Electric: '#FAC000',
  Psychic: '#EF4179',
  Ice: '#3DCEF3',
  Dragon: '#5060E1',
  Dark: '#624D4E',
  Fairy: '#EF70EF'
};

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const backgroundColor = typeColors[type] || '#AAA';

  return (
    <Badge style={{ backgroundColor, color: '#FFF' }}>
      {type}
    </Badge>
  );
};

export default TypeBadge;
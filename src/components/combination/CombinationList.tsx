import { useCombinationList } from 'queries/useCombinationList';
import Combination from './Combination';
import { CombinationType } from 'types/combination';

interface CombinationListProps {
  linkedRoutineId: string;
}

export default function CombinationList({ linkedRoutineId }: CombinationListProps) {
  const { data: CombinationList } = useCombinationList(linkedRoutineId as string);

  return (
    <div className={'flex flex-col gap-3 py-3'}>
      {CombinationList.map((combination: CombinationType) => (
        <Combination key={combination.id} combination={combination} />
      ))}
    </div>
  );
}

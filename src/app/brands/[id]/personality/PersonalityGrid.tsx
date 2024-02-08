import { PersonalityCharacteristic } from '@/interfaces/brandGuideline';
import RichText from '@/app/components/RichText';

export default async function PersonalityGrid({
  characteristics,
}: {
  characteristics: PersonalityCharacteristic[];
}) {
  return (
    <ul className="personality-grid">
      {characteristics.map((char) => (
        <li key={char.id}>
          <h3>{char.title['en-US']}</h3>
          <RichText html={char.description['en-US']} />
        </li>
      ))}
    </ul>
  );
}

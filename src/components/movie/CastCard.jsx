import { getProfileUrl } from '../../utils/imageUrl';

import malePlaceholder from '../../assets/images/male-placeholder.svg';
import femalePlaceholder from '../../assets/images/female-placeholder.svg';

function CastCard({ actor }) {
  const {
    name,
    character,
    profile_path,
    episode_count,
    gender,
  } = actor;

  const profileImage = profile_path
    ? getProfileUrl(profile_path)
    : gender === 1
      ? femalePlaceholder
      : malePlaceholder;

  return (
    <div
      className="w-[140px] shrink-0 rounded-lg overflow-hidden
    bg-white text-black shadow border border-gray-200"
    >
      <img
        className={`w-full h-[175px] ${
          profile_path
            ? 'object-cover'
            : 'object-contain p-6 bg-gray-200'
        }`}
        src={profileImage}
        alt={name}
      />

      <div className="p-2">
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm">{character}</p>
        {episode_count > 0 && (
          <p className="text-xs text-gray-500">
            {episode_count} episodes
          </p>
        )}
      </div>
    </div>
  );
}

export default CastCard;

import { getPosterUrl } from '../../utils/imageUrl';

function CastCard({ actor }) {
  const {
    name,
    character,
    profile_path,
    episode_count,
  } = actor;

  return (
    <div
      className="w-[138px] shrink-0 rounded-lg overflow-hidden
    bg-white text-black shadow border border-gray-200"
    >
      {profile_path ? (
        <img
          className="w-full h-[175px] object-cover"
          src={getPosterUrl(profile_path)}
          alt={name}
        />
      ) : (
        <div className="w-full h-[175px] bg-slate-700" />
      )}

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

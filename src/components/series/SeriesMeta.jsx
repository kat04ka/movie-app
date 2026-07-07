import { getLogoUrl } from '../../utils/imageUrl';

function SeriesMeta({
  status,
  networks,
  originalLanguage,
  type,
}) {
  const language = new Intl.DisplayNames(['en'], {
    type: 'language',
  }).of(originalLanguage);

  return (
    <div className="mt-3">
      <div className="mb-3">
        <h4 className="font-semibold">Status</h4>
        <p>{status}</p>
      </div>
      <div className="mb-3">
        <h4 className="font-semibold">
          Networks
        </h4>
        <div>
          {networks?.map((network) => (
            <img
              key={network.id}
              src={getLogoUrl(network.logo_path)}
              alt={network.name}
              className="mt-1 object-contain"
            />
          ))}
        </div>
      </div>
      <div className="mb-3">
        <h4 className="font-semibold">Type</h4>
        <p>{type}</p>
      </div>
      <div className="mb-3">
        <h4 className="font-semibold">
          Original Language
        </h4>
        <p>{language}</p>
      </div>
    </div>
  );
}

export default SeriesMeta;

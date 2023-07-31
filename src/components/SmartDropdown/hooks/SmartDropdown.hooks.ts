import { useEffect, useState } from 'react';

const useLazyFetchData = (url: string, isVisible: boolean, formatter: (profile: any) => never[]) => {
  const [data, setData] = useState([]);
  useEffect(() => {
      if (isVisible && data.length === 0) {
          fetch(url)
              .then(response => response.json())
              .then(data => {
                  setData(data.map((profile: any) => ({
                    id: profile.id, 
                    label: formatter(profile),
                    ...profile,
                  })));
              });
      }
  }, [isVisible, data]);
  return data;
}

export { useLazyFetchData }
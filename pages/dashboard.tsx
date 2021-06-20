import BaseLayout from 'components/layouts/BaseLayout';
import YoutubeTable from 'components/youtube-table';
import Table from 'components/table';
import { ChannelsProvider } from 'components/_context/channels';

export default function Index() {
  return (
    <BaseLayout>
      <ChannelsProvider>
        {/* <YoutubeTable /> */}
        <Table />
      </ChannelsProvider>
    </BaseLayout>
  );
}

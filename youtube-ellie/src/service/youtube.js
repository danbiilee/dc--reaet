import axios from 'axios';

class Youtube {
  constructor(key) {
    // 유튜브와 통신하는 base client 생성
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: key }, // base params 설정
    });
  }

  async mostPopular() {
    // get('나머지 url', { 요청 정보 })
    const response = await this.youtube.get('videos', {
      // 👍 가독성 good!
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });

    // json으로 직접 변환해줄 필요 없이 response.data로 접근 가능
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 25,
        q: query,
      },
    });

    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;

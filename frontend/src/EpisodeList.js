import React from "react";
import { Card, Col, Row } from "antd";
import episodeApi from "EpisodeApi";


class EpisodeDetail extends React.Component {
    state = {
        episode: this.props.episode,
    }

    render() {
        const { episode: { id, name, image: { medium: thumbUrl } } } = this.state;
        return (
            <Card
                style={{ width: 240 }}
                cover={<img alt={name} src={thumbUrl} />}>
                <Card.Meta title={name} />
            </Card>
        );
    }
}


class EpisodeList extends React.Component {
    state = {
        episodeList: [],
    }

    async componentDidMount() {
        const apiUrl = "/singlesearch/shows";
        const params= {
            q: 'mr-robot',
            embed: 'episodes',
        };
        try {
            const response = await episodeApi.get(apiUrl, { params });
            const { data: { _embedded: { episodes } } } = response;
            this.setState({
                episodeList: episodes,
            });
        }
        catch(error) {
            console.error(error);
        }
    }

    render() {
        const { episodeList } = this.state;
        return (
            <div>
                <h1>EpisodeList</h1>
                <Row>
                {
                    episodeList.map(episode =>
                        <Col span={8}>
                            <EpisodeDetail episode={episode} />
                        </Col>
                    )
                }
                </Row>
            </div>
        );
    }
}


export default EpisodeList;

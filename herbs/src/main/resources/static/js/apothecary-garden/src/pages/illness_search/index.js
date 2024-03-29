import Axios from 'axios';
import Herb from './herb';
import React from 'react';
import SearchBox from '../../components/searchbar';
import style from './style.module.scss';

export default class IllnessSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            illnessData: []
        };

        this.newSearch = this.newSearch.bind(this);
    }

    componentDidMount() {
        this.newSearch();
    }

    newSearch(search = 'cold') {
        let array = [];
        const url = `http://localhost:8080/api/herbs/illness/${search}`;
        Axios.get(url).then((response) => {
            let arrayOfHashes = response.data;
            arrayOfHashes.forEach((element) => {
                array.push({
                    name: element.data?.name,
                    link: element.data?.science,
                    description: element.data?.description,
                    fact: element.data?.fact,
                    picture: element.data?.picture,
                    id: element.data?.id,
                    sideEffects: element.data?.sideEffects,
                });
            });
            console.log(arrayOfHashes);
            this.setState({
                illnessData: arrayOfHashes
            });
        });
    }    
    
    render() {
        let illnessData = this.state.illnessData;
        let listItems = illnessData.map((hash,index) =>
            <li key={index}>
                <Herb 
                    name={hash.name}
                    science={hash.science}
                    description={hash.description}
                    fact={hash.fact}
                    sideEffects={hash.sideEffects}
                    picture={hash.picture}
                    id={index.id}
                />
            </li>
            
        );
        return (
            <div className={style.returnedHerbs}>
                <div className={style.topContainer}>
                    <h1 className={style.search_header}>Type in an Ailment to find Potential Herbal Remedies</h1>
                    <SearchBox className={style.searchBox} suggestedHerbs={this.suggestedHerbs}/>
                </div>
                <ul className={style.herbsList}>
                    {listItems}
                </ul>
            </div>
        );
    }

    suggestedHerbs = (input) => {
		this.newSearch(input);
	};
}

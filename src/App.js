
import React, { Component } from 'react';

import {
  ReactiveBase,
  DataSearch,
  MultiList,
  RangeSlider,
  SingleRange,
  ResultList,
  SelectedFilters,
  ResultCard,
  ReactiveList
} from '@appbaseio/reactivesearch';
import './App.css';

const { ResultCardsWrapper } = ReactiveList;


class App extends Component {
  render() {
    const imageURL="data:image/jpeg;base64,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";
    return (
      <div className="container-fluid">
        <ReactiveBase
          url="http://localhost:9200" app="bian_search2" type="doc"
        >
          <nav className="navbar navbar-expand-lg navbar-dark">
          <img height="36px" src={imageURL} />
            <a className="navbar-brand" href="#">
            LTI Mentor Bot
            </a>
            
           
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="col-lg-4 dataSearch">
                <DataSearch
                  componentId="mainSearch"
                  dataField={["heading","para_content"]}
                  queryFormat="and"
                  placeholder="Search"
                  queryFormat="and"
                  highlight={false}
                  
                  highlightField="heading"
                  autosuggest={false}
                  className="datasearch"
                  iconPosition="right"
                  innerClass={{
                    "input": "searchbox",
                    "list": "suggestionlist"
                  }}
                  renderError={error => (
                    <div>
                      Something went wrong with DataSearch
                      <br />
                      Error details
                      <br />
                      {error}
                    </div>
                  )}
                />
                </div>
              </div>
          </nav>
          <br/><br/><br/>
          <div className="row">
            <div className="col-8 col-lg-3 col-md-3 col-sm-4 scroll">
              <div className="box">
                <MultiList
                  dataField="document_name.keyword"
                  title="Documents"
                  componentId="documentReactor"
                  showSearch={false}
                  placeholder="Filter Documents"
                  showFilter={true}
                  filterLabel="Document_filter"
                  react={{
                    and: [
                      "mainSearch",
                    ]
                  }}
                  renderError={error => (
                    <div>
                      Something went wrong with Currency MultiList
                      <br />
                      Error details
                      <br />
                      {error}
                    </div>
                  )}
                />
              </div>
              <div className="box">
                <MultiList
                  dataField="heading.keyword"
                  title="Heading"
                  componentId="headingReactor"
                  showSearch={false}
                  placeholder="Filter Heading"
                  showFilter={true}
                  filterLabel="Heading_filter"
                  react={{
                    and: [
                      "mainSearch",
                      "documentReactor"
                    ]
                  }}
                  renderError={error => (
                    <div>
                      Something went wrong with Currency MultiList
                      <br />
                      Error details
                      <br />
                      {error}
                    </div>
                  )}
                />
              </div>
            </div>
            
          
        <div className="col-12 col-lg-9 col-md-7 col-sm-8 scroll marginBottom">
              <SelectedFilters />
        <ReactiveList
          componentId="queryResult"
          dataField="name"
          from={0}
          size={3}
          renderItem={(item) => (
              <ReactiveList.ResultListWrapper>
                <ResultList key={item._id}>
                 
                  <ResultList.Content>
                    <b>Document: {item.document_name} &gt; PageNo: {item.page_no} &gt; ParaNo: {item.para_no} </b>
                    <ResultList.Title>{item.heading}</ResultList.Title>
                    <ResultList.Description>
                      <div>
                        <p>{item.para_content}</p>
                        
                      </div>
                    </ResultList.Description>  
                  </ResultList.Content>
                </ResultList>
              </ReactiveList.ResultListWrapper>
          )}
          pagination={true}
          react={{
            and: [
              "mainSearch",
              "documentReactor",
              "headingReactor"
            ]
          }}
          renderError={error => (
            <div>
              Something went wrong with ResultList!
              <br />
              Error details
              <br />
              {error}
            </div>
          )}
        />
      </div>
      
        </div>
      </ReactiveBase>
      </div>
    );
  }
}



export default App;

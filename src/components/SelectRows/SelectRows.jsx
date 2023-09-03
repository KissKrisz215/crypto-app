import React from "react";
import {
  SelectWrapper,
  SelectButton,
  SelectOption,
  SelectHeader,
  SelectDropdown,
  SelectContainer,
  ArrowLogo,
  NavigationText,
} from "./SelectRows.styles";
import Icons from "../../assets/index";

const RowsArray = [10, 25, 50, 100];

export default class SelectRows extends React.Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
  }
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.dropdown && !this.dropdown.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { showRows, handleShowRowsChange } = this.props;

    return (
      <SelectWrapper onClick={this.handleToggle} ref={this.dropdown}>
        <NavigationText>Show:</NavigationText>
        <SelectContainer>
          <SelectHeader>
            {showRows && showRows}
            <ArrowLogo src={Icons.ArrowIcon} />
          </SelectHeader>
          {this.state.isOpen && (
            <SelectDropdown>
              <SelectButton>
                {RowsArray &&
                  RowsArray.map((item) => (
                    <SelectOption
                      onClick={() => handleShowRowsChange(item)}
                      value={item}
                    >
                      {item}
                    </SelectOption>
                  ))}
              </SelectButton>
            </SelectDropdown>
          )}
        </SelectContainer>
      </SelectWrapper>
    );
  }
}

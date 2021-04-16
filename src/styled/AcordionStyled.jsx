const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: lightgrey;
    border-radius: 10px;
    height: auto;
    padding: 2%;
    text-align: center;
    // transition: all 0.6s ease-in-out;
`;

const InternalWrapper = styled.div`
    width: 100%;
    max-height: ${(props) => (props.open ? '100px' : '0')};
    transition: all 0.4s ease-in-out;
    overflow: hidden;
`;

const Accordion = ({ title, subTitle, btnText }) => {
    const [ open, setOpen ] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <AccordionWrapper>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <InternalWrapper open={open}>
                <h1>Hello</h1>
            </InternalWrapper>
            <button padding="5px" onClick={handleClick}>
                {btnText}
            </button>
        </AccordionWrapper>
    );
};

export default Accordion;
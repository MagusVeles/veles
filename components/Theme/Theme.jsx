import classNames from "classnames";

const Theme = (({selectedTheme, children}) => {


    const themeClassNames = classNames({
        'theme': true,
        [`theme--${selectedTheme}`]: selectedTheme
    })
    
    return(
        <div className={themeClassNames}>
            {children}
            <div className="theme__effects"></div>
        </div>
    )
});

export default Theme;
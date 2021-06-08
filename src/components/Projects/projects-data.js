import ESPNOneFeed from '../../assets/projects/espn-onefeed.jpg';
import Iconography from '../../assets/projects/iconography.jpg';
import Playbook from '../../assets/projects/playbook.jpg';

// import NFLAnim from '../../assets/projects/nfl-animation.gif';
import NFLAnimMP4 from '../../assets/projects/nfl-animation.mp4';
import NFLAnimWEBM from '../../assets/projects/nfl-animation.webm';

// import MLBAnim from '../../assets/projects/mlb-animation.gif';
import MLBAnimMP4 from '../../assets/projects/mlb-animation.mp4';
import MLBAnimWEBM from '../../assets/projects/mlb-animation.webm';

export default [
    {
        title       : "ESPN Domestic & Int'l",
        role        : "UI Engineering Lead / Engineer",
        description : "Collaborated closely with design and product in the redesign and testing of ESPN Domestic and Int'l sites.  Led and contributed to development of UI components.",
        screens     : [
            {
                label : "One Feed",
                image : ESPNOneFeed
            }
        ],
    },
    {
        title       : "NFL Gamecast",
        role        : "UI Engineering Lead / Engineer",
        description : "Led and contributed to the UI Engineering of NFL Game Packages including the animated Drive Chart shown here.",
        // screens     : [
        //     {
        //         label : "NFL Drive Chart Animation",
        //         image : NFLAnim
        //     }
        // ],
        video : {
            webm : NFLAnimWEBM,
            mp4  : NFLAnimMP4,
        }
    },
    {
        title : "Playbook",
        role  : "UI Engineering Lead / Engineer",
        description : "Led the development our in house code documentation site (Playbook) in order to provide engineers with implementation details, design and product with examples of production ready code.",
        screens : [
            {
                label : "Playbook",
                image : Playbook
            }
        ]
    },
    {
        title       : "MLB Gamecast",
        role        : "UI Engineering Lead / Engineer",
        description : "Led UI Engineering of MLB Gamecast. Developed header animations and transitions and oversaw development of field animations.",
        // screens     : [
        //     {
        //         label : "Field Animation",
        //         image : MLBAnim
        //     }
        // ],
        video : {
            webm : MLBAnimWEBM,
            mp4  : MLBAnimMP4,
        }
    },
    {
        title : "Iconography Tool",
        role  : "UI Engineering Lead / Engineer",
        description : "Engineered a tool to house DMED Iconography which allows engineers to import entire icon sets, partial sets or individual icons in order to optimize a project.",
        screens : [
            {
                label : "Iconography",
                image : Iconography
            }
        ]
    },

]
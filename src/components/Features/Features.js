import Card from './Card';


const Features = () => {
  const state = [
    { iconClass: 'flaticon-mexican-taco', title: 'Business Consulting' },
    { iconClass: 'flaticon-house', title: 'Market Analysis' },
    { iconClass: 'flaticon-guitar', title: 'User Monitoring' },
    { iconClass: 'flaticon-gym', title: 'Insurance Consulting' },
    { iconClass: 'flaticon-shopping-bag', title: 'Customer Satisfied' },
    { iconClass: 'flaticon-cocktail', title: 'Plug & Play' },
  ];

  return (
    `<div class="Features" id="section2">
        <h1>Features</h1>
        <div class="grid">
            ${state.map((card) => Card(card.iconClass, card.title))}
        </div>
    </div>`.replaceAll(',', '')
  );
};

export default Features;

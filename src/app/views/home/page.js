'use client';

import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
	Grid,
	Column,
} from '@carbon/react';
import {
	Advocate,
	Globe,
	AcceleratingTransformation,
} from '@carbon/pictograms-react';
import { InfoSection, InfoCard } from '../../components/Info/Info';
//import Image from 'next/image';

export default function HomePage() {
	return (
		<Grid className="landing-page" fullWidth>
			<Column lg={16} md={8} sm={4} className="landing-page__banner">
				<Breadcrumb noTrailingSlash aria-label="Page navigation">
					<BreadcrumbItem>
						<a href="/">Getting started</a>
					</BreadcrumbItem>
				</Breadcrumb>
				<h1 className="landing-page__heading">
					Design &amp; build with Diamond
				</h1>
			</Column>
			<Column lg={16} md={8} sm={4} className="landing-page__r2">
				<Tabs defaultSelectedIndex={0}>
					<TabList
						className="tabs-group"
						aria-label="Page navigation"
					>
						<Tab>About</Tab>
						<Tab>Design</Tab>
						<Tab>Develop</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Grid className="tabs-group-content">
								<Column
									md={4}
									lg={7}
									sm={4}
									className="landing-page__tab-content"
								>
									<h3 className="landing-page__subheading">
										What is Diamond?
									</h3>
									<p className="landing-page__p">
										Diamond is a fork from IBM’s Carbon
										open-source design system for digital
										products and experiences. With the IBM
										Design Language as its foundation, the
										system consists of working code, design
										tools and resources, human interface
										guidelines, and a vibrant community of
										contributors.
									</p>
									<Button>Learn more</Button>
								</Column>
								<Column
									md={4}
									lg={{ span: 8, offset: 8 }}
									sm={4}
								>
									<img
										className="landing-page__illo"
										src="/tab-illo.png"
										alt="Diamond illustration"
										width={604}
										height={498}
									/>
								</Column>
							</Grid>
						</TabPanel>
						<TabPanel>
							<Grid className="tabs-group-content">
								<Column
									lg={16}
									md={8}
									sm={4}
									className="landing-page__tab-content"
								>
									<p className="landing-page__p">
										Rapidly build beautiful and accessible
										experiences. The Diamond kit contains
										all resources you need to get started.
									</p>
								</Column>
							</Grid>
						</TabPanel>
						<TabPanel>
							<Grid className="tabs-group-content">
								<Column
									lg={16}
									md={8}
									sm={4}
									className="landing-page__tab-content"
								>
									<p className="landing-page__p">
										Diamond provides styles and components
										in Vanilla, React, Next, Angular, and
										Vue for anyone building on the web.
									</p>
								</Column>
							</Grid>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Column>
			<Column lg={16} md={8} sm={4} className="landing-page__r3">
				<InfoSection heading="The Principles">
					<InfoCard
						heading="Diamond is Open"
						body="It's a distributed effort, guided by the principles of the open-source movement. Diamond's users are also it's makers, and everyone is encouraged to contribute."
						icon={() => <Advocate size={32} />}
					/>
					<InfoCard
						heading="Diamond is Modular"
						body="Diamond's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
						icon={() => <AcceleratingTransformation size={32} />}
					/>
					<InfoCard
						heading="Diamond is Consistent"
						body="Based on the comprehensive IBM Design Language, every element and component of Diamond was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
						icon={() => <Globe size={32} />}
					/>
				</InfoSection>
			</Column>
		</Grid>
	);
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomJumbotron from '@/components/custom/CustomJumbotron';
import HeroStats from './components/HeroStats';
import HeroGrid from './components/HeroGrid';
import { useState } from 'react';
import CustomPagination from '@/components/custom/CustomPagination';
import CustomBreadcrums from '@/components/custom/CustomBreadcrums';

export const HeroPage = () => {
    const [activeTab, setActiveTab] = useState<
        'all' | 'favorites' | 'heroes' | 'villains'
    >('all');

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="SuperHero universe"
                    description="Descubre los cosas del papu"
                />

                <CustomBreadcrums currentPage='Super Heroes'/>

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() => setActiveTab('all')}
                        >
                            All Characters (16)
                        </TabsTrigger>

                        <TabsTrigger
                            value="favorites"
                            className="flex items-center gap-2"
                            onClick={() => setActiveTab('favorites')}
                        >
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() => setActiveTab('heroes')}
                        >
                            Heroes (12)
                        </TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() => setActiveTab('villains')}
                        >
                            Villains (2)
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {/* Character Grid */}
                        <HeroGrid />
                    </TabsContent>

                    <TabsContent value="favorites">
                        <h1>Favoritos</h1>
                        {/* Character Grid */}
                        <HeroGrid />
                    </TabsContent>

                    <TabsContent value="heroes">
                        <h1>Heroes</h1>
                        {/* Character Grid */}
                        <HeroGrid />
                    </TabsContent>

                    <TabsContent value="villains">
                        <h1>Villanos</h1>
                        {/* Character Grid */}
                        <HeroGrid />
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={8}/>
            </>
        </>
    );
};

export default HeroPage;
